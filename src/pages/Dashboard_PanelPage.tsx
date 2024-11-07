import Dash_Banner_Control from "../components/Dashboard/Dash_Banner_Control"
import Dash_Delivery_Sec from "../components/Dashboard/Dash_Delivery_Sec";
import { useDashboardMetaDataQuery } from "../redux/api/authApi"

const Dashboard_PanelPage = () => {

  const { data } = useDashboardMetaDataQuery(undefined);


  return (
    <div className="p-3 font-sans h-full overflow-y-scroll w-full">
      <h1 className="text-center text-xl md:text-3xl font-semibold textDeepPurple ">Admin Panel</h1>
      <hr className="block my-3 md:my-3" />
      <div className="max-w-2xl mx-auto w-full flex md:p-3 gap-2 md:gap-10">
        <div className="w-[50%] lightPurple textDeepPurple aspect-square rounded-xl flex flex-col justify-around items-center">
          <h1 className="text-[.8rem] md:text-[1.2rem] font-semibold">Total Orders</h1>
          <h1 className="text-[4rem] md:text-[5rem] font-bold -mt-8 md:-mt-16">
            {
              data?.total_order < 10 ? `0${data?.total_order}`
                :
                data?.total_order
            }
          </h1>
        </div>
        <div className="w-[50%] lightPurple textDeepPurple aspect-square rounded-xl flex flex-col justify-around items-center">
          <h1 className="text-[.8rem] md:text-[1.2rem] font-semibold text-center">Processing Orders</h1>
          <h1 className="text-[4rem] md:text-[5rem] font-bold -mt-8 md:-mt-16">
            {
              data?.processing_order < 10 ? `0${data?.processing_order}`
                :
                data?.processing_order
            }
          </h1>
        </div>
        <div className="w-[50%] lightPurple textDeepPurple aspect-square rounded-xl flex flex-col justify-around items-center">
          <h1 className="text-[.8rem] md:text-[1.2rem] font-semibold text-center">Complete Orders</h1>
          <h1 className="text-[4rem] md:text-[5rem] font-bold -mt-8 md:-mt-16">
            {
              data?.complete_order < 10 ? `0${data?.complete_order}`
                :
                data?.complete_order
            }
          </h1>
        </div>
      </div>





      <Dash_Banner_Control />
      <Dash_Delivery_Sec/>
    </div>
  )
}

export default Dashboard_PanelPage
