 new Vue({
  el: '#app',
  data: {
    value:'',
    secondvalue:'',
    result:0,
    selected:''
  },
  methods:{
  	resultat(value){
  		var x=this.value
  		var y=this.secondvalue 
  		var optia=this.selected

  		switch (optia) {
		  case "+":
		    this.result = parseFloat(x) + parseFloat(y)
		    break;
		  case "-":
		    this.result = parseFloat(x) - parseFloat(y)
		    break;
		  case "*":
		    if(optia = "*") 
  			this.result = parseFloat(x) * parseFloat(y)
		    break;
		  case "/":
			  if (parseFloat(y)!=0) {
			  	this.result = parseFloat(x) / parseFloat(y)
			  }else alert( 'Делить на ноль нельзя!' );
		   	break;
		  default:
		    alert( 'Выберите опцию и введите значения' );
		}	
  	}
  },
  
});



