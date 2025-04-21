import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function MembershipSection() {
  const plans = [
    {
      name: "Student",
      price: "€20",
      period: "per year",
      description: "Perfect for undergraduate students looking to explore the field of economics.",
      features: [
        "Access to all club events",
        "Monthly newsletter",
        "Basic research resources",
        "Networking opportunities",
        "Certificate of membership",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "€35",
      period: "per year",
      description: "Ideal for dedicated students seeking advanced resources and opportunities.",
      features: [
        "All Student plan features",
        "Priority registration for events",
        "Access to exclusive workshops",
        "Mentorship program",
        "Resume review service",
        "Leadership opportunities",
      ],
      popular: true,
    },
    {
      name: "Alumni",
      price: "€50",
      period: "per year",
      description: "For graduates who want to stay connected and give back to the community.",
      features: [
        "All Premium plan features",
        "Speaking opportunities",
        "Recruiting access",
        "Alumni network directory",
        "Professional development resources",
        "Opportunity to mentor students",
      ],
      popular: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Join Our Community</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Membership Plans</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl">
              Choose the membership plan that best fits your needs and start your journey with Club de Economia UA.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg border ${plan.popular ? "border-accent" : "border-border"} bg-background p-6 shadow-sm transition-all hover:shadow-md`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-4 mt-4 text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-sm text-foreground/80">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/80">{plan.description}</p>
              </div>
              <ul className="mb-6 mt-6 space-y-2 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-auto w-full ${plan.popular ? "bg-accent text-white hover:bg-accent/90" : "bg-secondary text-foreground hover:bg-secondary/80"}`}
              >
                Join Now
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold">Need More Information?</h3>
              <p className="text-foreground/80">Contact us to learn more about our membership plans and benefits.</p>
            </div>
            <Button className="bg-accent text-white hover:bg-accent/90">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
