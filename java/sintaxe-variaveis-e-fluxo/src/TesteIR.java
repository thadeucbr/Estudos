
public class TesteIR {

	public static void main(String[] args) {
		double salario = 1900;
		
		if (salario >= 1900.00 && salario <= 2800.00) {
			System.out.println("De 1900.0 até 2800.0, o IR é de 7.5% e pode deduzir na declaração o valor de R$ 142");
		} else if (salario >= 2800.01 && salario <= 3751.0) { 
			System.out.println("De 2800.01 até 3751.0, o IR é de 15% e pode deduzir R$ 350");
		} else if (salario >= 3751.01 && salario <= 4664) {
			System.out.println("De 3751.01 até 4664.00, o IR é de 22.5% e pode deduzir R$ 636");
		}
	}

}
