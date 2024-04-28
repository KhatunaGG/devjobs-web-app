import JobDetail from "@/app/components/JobDetail";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <JobDetail params={params.id} />
    </div>
  );
}
