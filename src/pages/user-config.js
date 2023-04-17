import UserConfigIndex from "@/components/user-config";
import AuthenticatedLayout from "@/shared/authenticated-layout";

const UserConfig = () => {
  return (
    <AuthenticatedLayout>
			<UserConfigIndex />
		</AuthenticatedLayout>
  );
};

export default UserConfig;
