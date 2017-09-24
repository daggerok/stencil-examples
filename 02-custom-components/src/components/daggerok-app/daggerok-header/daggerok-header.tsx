import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'daggerok-header',
})
export class DaggerokHeader {

  @Prop() content: string;

  render() {
    return (
      <div>
        <div>App header el</div>
        <div>{this.content}</div>
      </div>
    );
  }
}
