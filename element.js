(function() {

  var currentScript = document._currentScript || document.currentScript;

  var element = Object.create(HTMLElement.prototype);

  element.createdCallback = function() {
    var importDoc = currentScript.ownerDocument;

    var template = importDoc.querySelector("#template");
    var shadowRoot = this.createShadowRoot();

    shadowRoot.appendChild(template.content.cloneNode(true));

    console.log("initalized");
  };

  document.registerElement('x-hello', {
    prototype: element
  });

}());
