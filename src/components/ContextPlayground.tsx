import { createContext, FC, useEffect } from "react";
import React from "react";

const DidiContext = createContext(123);

type IProps = Record<string, unknown>;

class Wrapper extends React.Component<IProps, { contextValue: number }> {
  contextValue: number;
  constructor(props: IProps) {
    super(props);
    this.contextValue = 0;
    this.state = {
      contextValue: 1,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.contextValue = this.contextValue + 1;
            console.log(this.contextValue);
          }}
          // onClick={() =>
          //   this.setState((pre) => ({
          //     contextValue: pre.contextValue + 1,
          //   }))
          // }
        >
          234
        </button>
        <DidiContext.Provider value={this.contextValue}>
          <Bar />
          <Bubu />
          <Bibi></Bibi>
          <DidiContext.Provider value={456}>
            <Foo />
          </DidiContext.Provider>
        </DidiContext.Provider>
      </>
    );
  }
}

const Bibi: FC = () => {
  useEffect(() => {
    console.log("Bibi rendering");
  });
  return <div>Bibi</div>;
};

const Bubu: FC = () => {
  useEffect(() => {
    console.log("Bubu rendering");
  });
  return (
    <DidiContext.Consumer>
      {(value) => <div>Bubu: {value}</div>}
    </DidiContext.Consumer>
  );
};

class Foo extends React.Component {
  static contextType = DidiContext;

  render() {
    return <div>Foo: {this.context}</div>;
  }
}

class Bar extends React.Component {
  static contextType = DidiContext;

  render() {
    return <div>Bar: {this.context}</div>;
  }
}

export default Wrapper;
