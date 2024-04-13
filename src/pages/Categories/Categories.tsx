import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Categories = () => {
  const categories = () => {
    return (
      <span>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </span>
    );
  };

  return (
    <div>
      <div className="px-5">
        <h2>Discover Open Source Projects</h2>
        <div className="flex">{categories()}</div>
      </div>
    </div>
  );
};

export default Categories;
