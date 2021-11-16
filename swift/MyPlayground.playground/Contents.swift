import UIKit

class Refeicao {
    var nome: String
    var felicidade: String
    var itens: [Item] = []
    
    init(nome: String, felicidade: String) {
        self.nome = nome
        self.felicidade = felicidade
    }
    
    func totalDeCalorias() -> Double {
        var total = 0.0
        for item in itens {
            total += item.calorias
        }
        return total
    }
}

class Item {
    var nome: String
    var calorias: Double
    
    init(nome: String, calorias: Double) {
        self.nome = nome
        self.calorias = calorias
    }
}
