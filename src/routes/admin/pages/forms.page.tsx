import { DashboardHeader } from "../../../components/DashboardHeader/DashboardHeader";

export default function FormsPage() {
  return (
    <>
      <DashboardHeader
        title="Forms"
        breadcrumbs={[
          {
            name: "Home",
            href: "#"
          }, {
            name: "Forms"
          }
        ]}
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim minima nihil odio earum architecto necessitatibus laudantium velit, molestiae, dolores sunt nobis quaerat inventore!</p>
    </>
  )
}