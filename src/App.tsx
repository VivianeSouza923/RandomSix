import { Component } from "react";

type MyProps = {};
type MyState = { produto: string};

export default class App extends Component<MyProps, MyState> {

  constructor(props: MyProps) {

    super(props);

    this.state = {

      produto: "",
    };

    this.setProduto = this.setProduto.bind(this);


  }

  setProduto(produto: string) {

    this.setState({ produto })

  }

  componentDidMount() {

    this.setProduto("Thorin");

  }

  render() {

    return(

      <div>

          <input
            type = "text"
            placeholder = "produto"
            value = {this.state.produto}
            onChange = {(event) => this.setProduto(event.target.value)}

          />
          <h2>{this.state.produto}</h2>
      </div>
    );
  }
}
