import type { Produto, produtoRequest } from "../types/Produto"
import { api } from "./api"

const produtoService = {
 async listar() {
    const resposta = await api.get<Produto[]>('produtos');
    return resposta.data;
},
async buscar(id: number){
    const resposta = await api.get(`produtos/${id}`)
    return resposta.data;
},
async cadrastar(dados: produtoRequest, arquivo: File) {
    const formulario = new FormData(); 
    formulario.append('nome', dados.nome);
    formulario.append('descricaoCurta', dados.descricaoCurta);
    formulario.append('descricaoLonga', dados.descricaoLonga);
    formulario.append('precoPorKg', String(dados.precoPorKg));
    formulario.append('ativo', String(dados.ativo));
    formulario.append('categoriaIds', JSON.stringify(dados.categoriaIds));
    formulario.append('imagen', arquivo);
    const resposta = await api.post<Produto>('produtos', formulario);
    return resposta.data
},
async atualizar (id: number, dados: produtoRequest){
    const resposta = await api.put<Produto>(`produltos/${id}`, dados);
    return resposta.data;
},
async excluir(id:number){
    await api.delete(`produtos/${id}`)
}


}

export default produtoService