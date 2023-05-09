function converterTempo(numero){
  return numero+'s'
}  

describe('Receber Numero', () => {
    test('Deveria retornar 30s quando receber 30', () => {  
        const numeroFormato = converterTempo(30);
        expect(numeroFormato).toBe('30s');
    });
    test('Deveria retornar 5m 50s quando receber 350', () => {  
        const numeroFormato = converterTempo(350);
        expect(numeroFormato).toBe('5m 50s');
    });
})
