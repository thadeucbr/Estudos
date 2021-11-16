//
//  AdicionarItensViewController.swift
//  eggplant-brownie
//
//  Created by Thadeu Castelo Branco Ramos on 15/11/21.
//

import UIKit

protocol AdicionaItensDelegate {
    func add(_ item: Item)
}

class AdicionarItensViewController: UIViewController {

    // MARK: - View Life Cycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    // MARK: - Atributos
    
    var delegate: AdicionaItensDelegate?
    
    init(delegate: AdicionaItensDelegate) {
        super.init(nibName: "AdicionarItensViewController", bundle: nil)
        self.delegate = delegate
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    
    // MARK: - IBOutlets
    
    @IBOutlet weak var nomeTextField: UITextField!
    @IBOutlet weak var caloriasTextField: UITextField!
    
    // MARK: - IBAction
    
    @IBAction func adicionarItem(_ sender: Any) {
        guard let nome = nomeTextField.text, let calorias = caloriasTextField.text else { return }
        
        guard let numeroDeCalorias = Double(calorias) else { return }
        
        let item = Item(nome: nome, calorias: numeroDeCalorias)
        delegate?.add(item)
        navigationController?.popViewController(animated: true)
    }
    

    
}
