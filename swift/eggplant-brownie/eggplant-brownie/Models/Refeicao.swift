//
//  Refeicao.swift
//  eggplant-brownie
//
//  Created by Thadeu Castelo Branco Ramos on 13/11/21.
//

import UIKit

class Refeicao: NSObject {
    let nome: String
    let felicidade: Int
    var itens: [Item] = []
    
    init(nome: String, felicidade: Int, itens: [Item] = []) {
        self.nome = nome
        self.felicidade = felicidade
        self.itens = itens
    }
    
    func totalDeCalorias() -> Double {
        var total = 0.0
        for item in itens {
            total += item.calorias
        }
        return total
    }
}
