//
//  ViewController.swift
//  eggplant-brownie
//
//  Created by Thadeu Castelo Branco Ramos on 13/11/21.
//

import UIKit

protocol AdicionaRefeicaoDelegate {
    func add(_ refeicao: Refeicao)
}

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, AdicionaItensDelegate {

    // MARK: - Atributos
    
    var delegate: AdicionaRefeicaoDelegate?
    var itens: [Item] = [Item(nome: "Molho tomate", calorias: 40), Item(nome: "Molho Queijo", calorias: 40), Item(nome: "Molho apimentado", calorias: 40), Item(nome: "Manjericao", calorias: 40)]
    var itensSelecionados: [Item] = []
    
    // MARK: - IBoutlets
    
    @IBOutlet var nomeTextField: UITextField?
    @IBOutlet var felicidadeTextField: UITextField?
    @IBOutlet weak var itensTableView: UITableView!
    
    
    // MARK: - View life cycle
    
    override func viewDidLoad() {
        let botaoAdicionaItem = UIBarButtonItem(title: "Adicionar", style: .plain, target: self, action: #selector(self.adicionarItens))
        navigationItem.rightBarButtonItem = botaoAdicionaItem
    }
    
    @objc func adicionarItens() {
        let adicionarItensViewController = AdicionarItensViewController(delegate: self)
        navigationController?.pushViewController(adicionarItensViewController, animated: true)
    }
    
    func add(_ item: Item) {
        itens.append(item)
        itensTableView.reloadData()
    }
    // MARK: - UITableViewDataSource
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return itens.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let celula = UITableViewCell(style: .default, reuseIdentifier: nil)
        
        let linhaDaTabela = indexPath.row
        celula.textLabel?.text = itens[linhaDaTabela].nome
        
        return celula
    }
    
    // MARK: - UITableViewDelegate
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let celula = tableView.cellForRow(at: indexPath) else { return }
        
        if celula.accessoryType == .none {
            celula.accessoryType = .checkmark
            itensSelecionados.append(itens[indexPath.row])
        } else {
            celula.accessoryType = .none
            let item = itens[indexPath.row]
            if let position = itensSelecionados.firstIndex(of: item) {
                itensSelecionados.remove(at: position)
            }
        }
    }
    
    // MARK: - IBActions
    
    @IBAction func adicionar() {
        
//        if let nomeDaRefeicao = nomeTextField?.text, let felicidadeDaRefeicao = felicidadeTextField?.text {
//            let nome: String = nomeDaRefeicao
//            if let felicidade: Int = Int(felicidadeDaRefeicao) {
//                let refeicao = Refeicao(nome: nome, felicidade: felicidade)
//            } else {
//                print("erro ao tentar criar refeição")
//            }
//        }
        guard let nomeDaRefeicao = nomeTextField?.text else {
            return
        }
        guard let felicidadeDaRefeicao = felicidadeTextField?.text, let felicidade = Int(felicidadeDaRefeicao) else {
            return
        }
        
        let refeicao = Refeicao(nome: nomeDaRefeicao, felicidade: felicidade, itens: itensSelecionados)
        delegate?.add(refeicao)
        navigationController?.popViewController(animated: true)
    }

}

