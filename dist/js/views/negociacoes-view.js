import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-houver table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(item => {
            return `
                            <tr>
                                <td>${this.formatar(item.data)}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                            </tr>
                        `;
        })}
                </tbody>
            </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
