interface Person {
  name: string;
  age: number;
}
type Who = "a" | "b" | "c";

type NewType = Record<Who, Person>;
