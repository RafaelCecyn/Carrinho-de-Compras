class Produto {

    constructor() {
        this.arrayProdutos = [];
    }

    salvar() {
       let produto = this.lerDados();

       if(this.validaCampos(produto)) {
            this.adicionar(produto);
       }

       this.listaTabela();

       this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = "";

        for(let i = 0; i < this.arrayProdutos.length; i++ ) {
            let tr =tbody.insertRow();

            let td_produto = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_medida = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_quantidade.innerText = this.arrayProdutos[i].quantidade
            td_medida.innerText = this.arrayProdutos[i].medida

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick","produto.deletar()")

            td_acoes.appendChild(imgEdit);           
            td_acoes.appendChild(imgDelete);           
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
    }

    lerDados() {
        let produto = {}

        produto.nomeProduto = document.getElementById('produto').value;
        produto.quantidade = document.getElementById('quantidade').value;
        produto.medida = document.getElementById('medida').value;

        return produto
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == "") {
            msg += 'Informe o nome do Produto \n';
        }

        if(produto.quantidade == "") {
            msg += 'Informe a quantidade \n';
        }

        if(produto.medida == "") {
            msg += 'Informe a medida \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('medida').value = '';
    }

    deletar() {
        alert('deletar')
    }
}

var produto = new Produto();