# CSS -> Cascanding Style Sheets

* Tudo é lido de cima pra baixo, e esquerda pra direita

* Trabalha com "quem manda mais" - prioridade de código

3 modelos de uso diferentes
- css inline -> maior prioridade / menor reutilização
- css interno
- css externo -> menor prioridade / maior reutilização


Seletor e Propriedades(valor)

p {
  font-size: 48px
}

### Tipos de seletores
* tag
* classe
* id

# Atributos do CSS

## Unidades de medida

### Medidas fixas:
* cm ->	centímetros
* mm ->	milímetros
* in ->	polegadas	(1in = 96px = 2,54cm)
* **px ->	pixels	(1px = 1/96 de 1in)**
* pt ->	pontos	(1pt = 1/72 de 1in)
* pc ->	paicas	(1pc = 12pt)

### Medidas relativas
* em ->	relativo ao tamanho da fonte do elemento	(2em significa 2 vezes o tamanho da fonte atual)
* ex ->	relativo à altura da letra “x” da fonte atual	(raramente utilizado)
* ch ->	relativo à largura do caractere “0” (zero)
* **rem -> relativo ao tamanho da fonte do elemento raiz (<html>)**
* **vw ->	relativo a 1% da largura da viewport**
* **vh ->	relativo a 1% da altura da viewport**
* vmin ->	relativo a 1% da menor dimensão da viewport	
* vmax ->	relativo a 1% da maior dimensão da viewport	
* **% ->	relativo ao elemento pai**

## Espaçamentos
### espaçamento externo
margin

### espaçamento interno
padding

# Variaveis (pseudovariaveis)
```css
:root {
  --corPrimaria: #2a0442;
  --corFundo: #151313;
}

header {
  background-color: var(--corPrimaria);
  border: 2px solid black;
  margin: 0px auto;
  padding: 0px 20px;
  width: 30vw;
}
```

# Responsividade
> O que é responsividade?
* É fazer a página se ajustar a diferentes tamanhos de tela.
* Modificar certos elementos da página, de acordo com o tamanho da tela.

Tamanho de tela => resolução da tela

**Breakpoints** === **Ponto de quebra**


## cores do projeto
1- preto
2- marrom café
3- verde
4- laranja
5- roxo

