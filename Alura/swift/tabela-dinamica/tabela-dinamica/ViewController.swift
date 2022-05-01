//
//  ViewController.swift
//  tabela-dinamica
//
//  Created by Thadeu Castelo Branco Ramos on 14/11/21.
//

import UIKit

class ViewController: UITableViewController {
    
    let refeicoes: [String] = ["Churros", "Macarrao", "Pizza"]

    override func viewDidLoad() {
        super.viewDidLoad()
        print("Table view controller foi carregado")
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return refeicoes.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let celula = UITableViewCell(style: .default, reuseIdentifier: nil)
        let refeicao = refeicoes[indexPath.row]
        celula.textLabel?.text = refeicao
        return celula
    }
}

