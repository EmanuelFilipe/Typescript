import { Negociacoes } from "../models/negociacoes.js"

export class NegociacoesView {
    private element: HTMLElement

    constructor(selector: string) {
        this.element = document.querySelector(selector)
    }

    template(model: Negociacoes): string {
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
                                <td>${new Intl.DateTimeFormat().format(item.data)}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                            </tr>
                        `
                    })}
                </tbody>
            </table>
        `
    }

    update(model: Negociacoes): void {
        this.element.innerHTML = this.template(model)
    }
}