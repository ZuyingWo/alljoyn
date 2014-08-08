var alljoyn = require('bindings')('node-alljoyn');

console.log("Test loading alljoyn bus...", alljoyn);
var bus = alljoyn.BusAttachment("test");
var inter = alljoyn.InterfaceDescription();
var listener = alljoyn.BusListener(
	function(){
		console.log("FoundAdvertisedName");
	},
	function(){
		console.log("LostAdvertisedName");
	},
	function(){
		console.log("NameOwnerChanged");
	}
);
console.log("Result: "+bus+" - "+inter+" - "+listener);

console.log("CreateInterface "+bus.createInterface("org.alljoyn.bus.samples.chat", inter));
console.log("AddSignal "+inter.addSignal("Chat", "s",  "str"));
console.log("RegisterBusListener "+bus.registerBusListener(listener));
console.log("Start "+bus.start());