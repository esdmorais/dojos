const assert = require("assert");
const indoArabicoRomano = require("../js/indoArabicoRomano");

describe('indoArabicoRomano', function() {
  describe('converteIndoArabicoParaRomano', function() {
    it('quando o usu�rio digitar 1, ser� retornado I', function() {
      assert.equal("I", indoArabicoRomano.converteIndoArabicoParaRomano(1));
    });

    it('quando o usu�rio digitar 2, ser� retornado II', function() {
      assert.equal("II", indoArabicoRomano.converteIndoArabicoParaRomano(2));
    });

    it('quando o usu�rio digitar 3, ser� retornado III', function() {
      assert.equal("III", indoArabicoRomano.converteIndoArabicoParaRomano(3));
    });
	
	it('quando o usu�rio digitar 4, ser� retornado IV', function() {
      assert.equal("IV", indoArabicoRomano.converteIndoArabicoParaRomano(4));
    });
	
	it('quando o usu�rio digitar 1000, ser� retornado M', function() {
      assert.equal("M", indoArabicoRomano.converteIndoArabicoParaRomano(1000));
    });
	
	it('quando o usu�rio digitar 2000, ser� retornado MM', function() {
      assert.equal("MM", indoArabicoRomano.converteIndoArabicoParaRomano(2000));
    });

	it('quando o usu�rio digitar 900, ser� retornado CM', function() {
      assert.equal("CM", indoArabicoRomano.converteIndoArabicoParaRomano(900));
    });
	
	it('quando o usu�rio digitar 500, ser� retornado D', function() {
      assert.equal("D", indoArabicoRomano.converteIndoArabicoParaRomano(500));
    });
	
	it('quando o usu�rio digitar 800, ser� retornado DCCC', function() {
      assert.equal("DCCC", indoArabicoRomano.converteIndoArabicoParaRomano(800));
    });
	
	context("quando o valor for inv�lido", function() {
		it('quando o usu�rio digitar 0, n�o ser� convertido em romano', function() {
		   assert.equal("", indoArabicoRomano.converteIndoArabicoParaRomano(0));
		});
		
		it('quando o usu�rio digitar 4000, n�o ser� convertido em romano', function() {
			assert.equal("", indoArabicoRomano.converteIndoArabicoParaRomano(4000));
		});

		it('quando o usu�rio digitar um valor decimal, n�o ser� convertido em romano', function() {
		   assert.equal("", indoArabicoRomano.converteIndoArabicoParaRomano(3.14));
		});

	});
  });
});