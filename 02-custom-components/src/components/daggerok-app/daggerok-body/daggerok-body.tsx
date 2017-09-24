import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'daggerok-body',
})
export class DaggerokBody {

  @Prop() content: string;

  render() {
    return (
      <div>
        <div>App body el</div>
        <div>{this.content}</div>
      </div>
    );
  }
}
