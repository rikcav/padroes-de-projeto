export class ClassicSingleton {
  private static _instance: ClassicSingleton | null = null;

  private constructor() {}

  public static get instance(): ClassicSingleton {
    if (ClassicSingleton._instance === null) {
      ClassicSingleton._instance = new ClassicSingleton();
    }
    return ClassicSingleton._instance;
  }
}
