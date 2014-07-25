(function() {

  var element = Object.create(HTMLElement.prototype);

  element.createdCallback = function() {
    var importDoc = currentScript.ownerDocument;

    var template = importDoc.querySelector("#template");
    var shadowRoot = this.createShadowRoot();

    shadowRoot.appendChild(template.content.cloneNode(true));

  };

  document.registerElement('x-hello', {
    prototype: element
  });

}());
