Blockly.Blocks['mover'] = {
  init: function() {
  	this.appendDummyInput().appendField(new Blockly.FieldImage("img/mover.gif", 64, 64, "*")).appendField("Mover");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(204);
    this.setTooltip('');
  }
};

Blockly.Blocks['girarEsquerda'] = {
  init: function() {
  	this.appendDummyInput().appendField(new Blockly.FieldImage("img/girarEsquerda.gif", 64, 64, "*")).appendField("Girar Esquerda");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(276);
    this.setTooltip('');
  }
};

Blockly.Blocks['girarDireita'] = {
  init: function() {
  	this.appendDummyInput().appendField(new Blockly.FieldImage("img/girarDireita.gif", 64, 64, "*")).appendField("Girar Direita");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(126);
    this.setTooltip('');
  }
};

Blockly.Blocks['repetir'] = {
  /**
   * Block for repeat n times (internal number).
   * The 'controls_repeat_ext' block is preferred as it is more flexible.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": 'Repetir %1 vezes',
      "args0": [
        {
          "type": "field_number",
          "name": "TIMES",
          "value": 2,
          "min": 0,
          "precision": 1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "0",
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.appendStatementInput('DO');
  }
};


Blockly.Blocks['mudarPersonagem'] = {
  init: function() {
    this.appendValueInput("mudarPersonagem")
        .setCheck("personagem")
        .appendField("Mudar personagem");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['poranito'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/mover.png", 64, 64, "*"));
    this.setOutput(true, "personagem");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['zygmundi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/zygmundi.png", 64, 64, "*"));
    this.setOutput(true, "personagem");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};