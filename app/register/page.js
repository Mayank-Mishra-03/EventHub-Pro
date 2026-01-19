import { Suspense } from "react";
import Container from "@/components/helperComponents/Container";
import SectionHeadingAndSubHeading from "@/components/helperComponents/SectionHeadingAndSubHeading";
import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="bg-background min-h-screen pt-16 pb-20">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Register for EventHub Pro"
          subHeading="Secure your spot today"
        />

        <Suspense
          fallback={
            <div className="text-center py-20 text-neutral-500">
              Loading registration details...
            </div>
          }
        >
          <RegisterForm />
        </Suspense>
      </Container>
    </div>
  );
};

export default RegisterPage;
