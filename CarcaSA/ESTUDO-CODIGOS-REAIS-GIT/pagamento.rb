# Simulação da classe Usuario
class Usuario
  attr_accessor :id, :saldo

  def initialize(id, saldo_inicial)
    @id = id
    @saldo = saldo_inicial
  end
end

# Simulação da classe Transacao
# Em um cenário real, esta classe provavelmente interagiria com um banco de dados.
class Transacao
  attr_accessor :usuario_id, :valor, :status

  @@all = [] # Simula um "banco de dados" de transações

  def initialize(usuario_id, valor, status)
    @usuario_id = usuario_id
    @valor = valor
    @status = status
  end

  def self.create(attributes)
    transacao = new(attributes[:usuario_id], attributes[:valor], attributes[:status])
    @@all << transacao # Adiciona a transação à nossa "lista"
    transacao
  end

  def self.all
    @@all
  end
end

# Inclua a classe PagamentoService que você me mostrou aqui:
class PagamentoService
  def processar_pagamento(usuario, valor)
    if usuario.saldo >= valor
      usuario.saldo -= valor
      salvar_transacao(usuario, valor)
      "✅ Pagamento de R$#{valor} aprovado!"
    else
      "❌ Saldo insuficiente!"
    end
  end

  def salvar_transacao(usuario, valor)
    Transacao.create(usuario_id: usuario.id, valor: valor, status: "concluído")
  end
end

# --- Exemplo de Uso ---

puts "--- Cenário 1: Pagamento aprovado ---"
usuario1 = Usuario.new(1, 1000.00) # Cria um usuário com ID 1 e saldo de R$1000
puts "Saldo inicial do usuário 1: R$#{usuario1.saldo}"

servico_pagamento = PagamentoService.new # Cria uma instância do serviço de pagamento
resultado = servico_pagamento.processar_pagamento(usuario1, 250.00)
puts resultado
puts "Saldo atual do usuário 1: R$#{usuario1.saldo}"
puts "Transações registradas: #{Transacao.all.size}"
puts Transacao.all.last.inspect # Mostra a última transação criada

puts "\n--- Cenário 2: Saldo insuficiente ---"
usuario2 = Usuario.new(2, 50.00) # Cria um usuário com ID 2 e saldo de R$50
puts "Saldo inicial do usuário 2: R$#{usuario2.saldo}"

resultado = servico_pagamento.processar_pagamento(usuario2, 100.00)
puts resultado
puts "Saldo atual do usuário 2: R$#{usuario2.saldo}"
puts "Transações registradas: #{Transacao.all.size}" # Não deve ter nova transação para este caso