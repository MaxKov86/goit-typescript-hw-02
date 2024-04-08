/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IProps {
  title: string;
}
class Component<T> {
  constructor(public props: T) {
    this.props = props;
  }
}

class Page extends Component<IProps> {
  constructor(props) {
    super(props);
  }
  pageInfo() {
    console.log(this.props.title);
  }
}
const page = new Page({  title: "Title" });
page.pageInfo();
export {};
