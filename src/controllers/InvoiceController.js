import Controller from "./Controller";
import Excel from 'node-excel-export';
import InvoiceService from "../services/InvoiceService";
import Invoice from "../model/Invoice.model";

const invoiceService = new InvoiceService(
    Invoice
)

class InvoiceController extends Controller {
    constructor(service) {
        super(service);
        this.download = this.download.bind(this);
    }

    async download(req, res) {
        let response = await this.service.download(req.query);
        if (response.error)
            return res.status(response.statusCode).send(response.errors);
        const styles = {
            headerDark: {
                fill: {
                    fgColor: {}
                },
                font: {
                    color: {},
                    sz: 12,
                    bold: true,
                    underline: false
                }
            },
            cellPink: {
                fill: {
                    fgColor: {
                        rgb: 'FFFFCCFF'
                    }
                }
            },
            cellStandard: {
                fill: {
                    fgColor: {
                    }
                }
            }
        };
        const specification = {
            customer_name: { // <- the key should match the actual data key
                displayName: 'Responsable', // <- Here you specify the column header
                headerStyle: styles.headerDark,
                width: 120 // <- width in pixels
            },
            provider_rut: { // <- the key should match the actual data key
                displayName: 'Rut', // <- Here you specify the column header
                headerStyle: styles.cellStandard,
                width: 80 // <- width in pixels
            },
            provider_name: { // <- the key should match the actual data key
                displayName: 'Proveedor', // <- Here you specify the column header
                headerStyle: styles.cellStandard,
                width: 200 // <- width in pixels
            },
            document_type: { // <- the key should match the actual data key
                displayName: 'Tipo', // <- Here you specify the column header
                headerStyle: styles.cellStandard,
                width: 120 // <- width in pixels
            },
            document_number: { // <- the key should match the actual data key
                displayName: 'Numero', // <- Here you specify the column header
                headerStyle: styles.cellStandard,
                width: 80 // <- width in pixels
            },
            emission_date: { // <- the key should match the actual data key
                displayName: 'Emisión', // <- Here you specify the column header
                headerStyle: styles.cellStandard,
                width: 80 // <- width in pixels
            },
            createdAt: { // <- the key should match the actual data key
                displayName: 'Ingreso', // <- Here you specify the column header
                headerStyle: styles.cellStandard,
                width: 80 // <- width in pixels
            },
            amount: { // <- the key should match the actual data key
                displayName: 'Monto', // <- Here you specify the column header
                headerStyle: styles.cellStandard,
                width: 80 // <- width in pixels
            }
        }
        let dataset = []
        response.data.forEach(item => {
            let total = 0;
            item.detail.forEach((detail) => {
                total += detail.amount * detail.quantity;
            });
            dataset.push({
                customer_name: item.user.firstName,
                provider_rut: item.provider.rut,
                provider_name: item.provider.name,
                document_type: item.document.name,
                document_number: item.document_number,
                emission_date: item.emission_date,
                createdAt: item.createdAt,
                amount: total + total * (item.tax / 100)
            });
        });
        const report = Excel.buildExport([{
            name: 'Reporte',
            specification: specification,
            data: dataset
        }]);
        res.attachment('reporte-facturas.xlsx');
        return res.status(200).send(report);
    }
}

export default new InvoiceController(invoiceService);