const app = new Vue({
  el: '#app',
  data: {
    result: '',
    equation: '',
    afterResult: false
  },
  methods: {
    addInput: function(n) {
      if(this.afterResult) {
        this.equation = '';
        this.equation += n;
        this.afterResult = false;
      } else {
        this.equation += n;
      }
    },
    doEquation: function() {
      try {
        this.result = eval(this.equation);
        this.equation = this.result;
        this.afterResult = true;
      } catch (error) {
        if (error instanceof SyntaxError) {
          this.equation = 'Syntax error';
          this.afterResult = true;
        }
      }
    },
    clearInput: function() {
      this.equation = '';
    }
  }
});