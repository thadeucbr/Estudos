//
//  Item.swift
//  eggplant-brownie
//
//  Created by Thadeu Castelo Branco Ramos on 13/11/21.
//

import UIKit

class Item: NSObject {
    let nome: String
    let calorias: Double
    
    init(nome: String, calorias: Double) {
        self.nome = nome
        self.calorias = calorias
    }
}
