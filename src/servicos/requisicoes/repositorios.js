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

export async function buscarRepositoriosPorNome(nome){
    try{
        const resultado = await api.get(`/repos?postId=${postId}&name=${nome}`);
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

export async function criarRepositorio(postId, nome, data){
    try{
        await api.post(`/repos/`,{
            name: nome,
            data: data,
            postId: postId,
        });
        return 'Sucesso'
    }
    catch(error){
         return 'Erro'
    }
};

export async function deletarRepositorio(id){
    try{
        await api.delete(`/repos/${id}`);
        return 'Sucesso'
    }
    catch(error){
         return 'Erro'
    }
};