import api from "../api"


export async function buscarRepositorios(id){
    try{
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data
    }
    catch(error){
        console.log(error)
        return []
    }
};

export async function atualizarRepositorios(postId, nome, data, id){
    try{
        await api.put(`/repos/${id}`,{
            name: nome,
            data: data,
            postId: postId,
            id: id
        });
        return 'Sucesso'
    }
    catch(error){
         return 'Erro'
    }
};