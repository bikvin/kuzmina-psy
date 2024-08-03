import TopMenu from "@/components/admin/topMenu/topMenu";
import ConnectRequestsList from "@/components/admin/connectRequests/connectRequestsList";

export default function AdminPage() {
  return (
    <>
      <TopMenu page="main" />
      <div className="wrapper">
        <h1 className="adminHeader">Запросы от клиентов</h1>
        <ConnectRequestsList />
      </div>
    </>
  );
}
