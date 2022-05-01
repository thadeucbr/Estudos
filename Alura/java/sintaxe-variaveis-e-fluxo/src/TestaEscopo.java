
public class TestaEscopo {

	public static void main(String[] args) {
		
		int idade = 15;
		int quantidadePessoas = 2;
		boolean acompanhado;

		if (quantidadePessoas >= 2) {
			acompanhado = true;
		} else {
			acompanhado = false;
		}

		if (idade >= 18 || acompanhado) {
			System.out.println("seja bem vindo");
		} else {
			System.out.println("infelizmente voce nao pode entrar");
		}

	}
}
