import useFormateDateHook from './useDateFormateHook';

export default function useGlobalHook() {
  const dateFormateHook = useFormateDateHook();
  /* const { changeStatus } = useGetStatus(
    url,
    refetchList,
    changeStatusPermission
  ); */

  const tableListCommonColumns = (data) => {
    return {
      createdAt: dateFormateHook(data?.createdAt),
      // ...changeStatus(data.status, data.id),
    };
  };

  return { tableListCommonColumns };
}
