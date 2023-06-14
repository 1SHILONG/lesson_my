import {
  Camera,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'

export default class Viewer {
  public id: string;
  public viewerDOM!: HTMLElement;
  public renderer!: WebGLRenderer;
  public scene!: Scene;
  public camera!: PerspectiveCamera;
  constructor(id: string) {
    this.id = id;
    this.initViewer();
  }
  // 类的内部调用，封装的复杂性
  private initViewer() {
    this.initRenderer();
    this.initScene();
    this.initCamera();
    const animate = () => {
      requestAnimationFrame(animate);
      this.updateDOM();
      this.readerDOM();
    }
    animate();
  }
  private updateDOM() {
    this.renderer.setSize(this.viewerDOM.clientWidth,
      this.viewerDOM.clientHeight);
  }
  private readerDOM() {
    this.renderer.render(this.scene as Scene, this.camera as Camera);
  }
  private initRenderer() {
    this.viewerDOM = document.getElementById(this.id) as HTMLElement;
    this.renderer = new WebGLRenderer({
      antialias: true
    });
    this.viewerDOM.appendChild(this.renderer.domElement);
  }
  private initScene() {
    this.scene = new Scene();
  }
  private initCamera() {
    this.camera = new PerspectiveCamera(
      25,
      window.innerWidth / window.innerHeight,
      1,
      2000
    ) 
    this.camera.position.set(4, 2, -3);
    this.camera.lookAt(0, 0, 0);
  }
}