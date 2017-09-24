import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'daggerok-footer',
})
export class DaggerokFooter {

  @Prop() content: string;

  render() {
    return (
      <div>
        <div>App footer el</div>
        <div>{this.content}</div>
      </div>
    );
  }
}
