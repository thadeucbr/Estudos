
public class TestaCondicional {

	public static void main(String[] args) {
		int idade = 15;
		int quantidadePessoas = 3;
		if (idade >= 18) {
			System.out.println("você tem mais de 18 anos");
			System.out.println("seja bem vindo");
		} else {
			if (quantidadePessoas >= 2) {
				System.out.println("voce nao tem 18, mas pode entrar");
			} else {
				System.out.println("infelizmente voce nao pode entrar");				
			}
		}
	}

}
