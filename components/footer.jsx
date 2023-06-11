
import Image from 'next/image';

const footer = () => {
  return (
    <div className='relative mt-20 w-full md:h-[1460px] sm:h-[2760px] h-[3000px]'>
      <div className="md:h-[1360px] sm:h-[2660px] h-[2900px] flex justify-center">
        <img src="/img/footer.png" className=' absolute md:w-full md:h-[1360px] sm:h-[2660px] h-[2900px] object-cover' />
        <div className='bg-white w-full md:h-[1360px] sm:h-[2660px] h-[2900px] absolute opacity-80' />

        {/* footer */}
        <div className='md:w-[1200px] md:h-[1100px] sm:w-[768px] w-[410px] h-[2400px] z-10'>

          {/* shop */}
          <div className='mt-10 md:ml-0 sm:ml-10 mx-2'>
            <span className='font-bold sm:text-base text-xl'>CÁC CỬA HÀNG LIÊN KẾT - TRUNG TÂM BẢO HÀNH</span>
            <Image src="/icons/location.svg" width={12} height={12} className='absolute pt-6' />
          </div>

          {/* shop location  */}
          <div className='md:mx-10 mx-14 mt-6 md:grid md:grid-cols-4 md:gap-6 flex flex-col gap-5'>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>147 Lạch Tray - Ngô Quyền - Hải Phòng | MST: 0201315708</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop 147 Lạch Tray: </span>
                <span className='text-red-600'>08 9999 8886</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>207 Đà Nẵng - Ngô Quyền - Hải Phòng | MST: 0201782244</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop 207 Đà Nẵng: </span>
                <span className='text-red-600'>0986.319.829</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>551 Quán Toan - Hồng Bàng - Hải Phòng ( Ngã 4 Quán Toan) | MST: 8577219929</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop 551 Quán Toan: </span>
                <span className='text-red-600'>0983.763.977</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>Thủy Nguyên - 29B Đà Nẵng - Huyện Đoàn - Hải Phòng ( Trên đường 359) | MST: 0201978134</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop 29b Đà Nẵng - Núi Đèo - Thủy Nguyên: </span>
                <span className='text-red-600'>0848.965.999</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>Thôn 9 Trịnh Xá - Thiên Hương - Hải Phòng | MST: 020210334</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop Thuỷ Nguyên 2: </span>
                <span className='text-red-600'>0764.966.966</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>Số 10 - Tổ 1 ( Đường 208) - TT.An Dương - Hải Phòng (Ngã tư Rế) | MST: 8625416239</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop An Dương: </span>
                <span className='text-red-600'>0977.086.346</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>218 Trần Thành Ngọ - Kiến An | MST: 0201201073</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop Kiến An: </span>
                <span className='text-red-600'>0888.6666.50</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>7 - 9 Trần Nhân Tông - Kiến An - Hải Phòng | MST: 8443575851</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop Kiến An: </span>
                <span className='text-red-600'>07777.9999.5</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>266B Trần Nguyên Hãn - Hải Phòng | MST: 0201702707</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop Trần Nguyên Hãn: </span>
                <span className='text-red-600'>037.43.88888</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>Số 8 Trần Tất Văn - TT An Lão - Hải Phòng | MST: 8655230062</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Shop An Lão: </span>
                <span className='text-red-600'>03541.99999</span>
              </div>
            </div>

            <div className=' w-[242px]'>
              <span className='text-[13px] font-bold'>Thôn Tây - Trung Hà - Thủy Nguyên - Hải Phòng |</span>
              <span className='pl-1 text-xs font-normal text-red-600'>Xem bản đồ</span>
              <div className='mt-4'>
                <span className='font-normal text-[13px]'>Quản Lý Trung Hà - Thủy Nguyên: </span>
                <span className='text-red-600'>03542.99999</span>
              </div>
            </div>

          </div>

          {/* shop location 2 */}
          <div className='md:mx-10 mx-14 mt-6 h-[450px] flex flex-col gap-5'>

            <div className=''>
              <span className='text-[13px] font-bold'>Cẩm La - Thanh Sơn - Kiến Thuỵ: </span>
              <span className='pl-1 text-sm font-bold text-red-600'>Xem bản đồ</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold'>Quản Lý Shop Kiến Thuỵ: </span>
              <span className='pl-1 text-sm font-bold text-red-600'>03874 88888</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold'>245 Tô Hiệu - Lê Chân - Hải Phòng | MST: </span>
              <span className='pl-1 text-sm font-bold text-red-600'>Xem bản đồ</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold'>Quản Lý Shop Tô Hiệu: </span>
              <span className='pl-1 text-sm font-bold text-red-600'>03774 88888</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold'>601 Ngô Gia Tự - Hải An - Hải Phòng | : </span>
              <span className='pl-1 text-sm font-bold text-red-600'>Xem bản đồ</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold'>Quản Lý Shop Tô Hiệu: </span>
              <span className='pl-1 text-sm font-bold text-red-600'>03274 88888</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold'>Phản Ánh - Khiếu Nại</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold text-red-600'>08888.9999.68</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold'>Tư Vấn Laptop - Sim số đẹp</span>
            </div>

            <div className=''>
              <span className='text-[13px] font-bold text-red-600'>08471.88888</span>
            </div>

          </div>

          {/* contact */}
          <div className='flex flex-col gap-4 md:mx-0 mx-14'>
            <div className='flex gap-2'>
              <Image src="/icons/phone.svg" width={12} height={12} />
              <span className='text-[13px] font-bold'>Số điện thoại: <span className='text-[13px] font-bold text-red-600'>1900.2239</span></span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <Image src="/icons/mail.svg" width={12} height={12} />
                <span className='text-[13px] font-bold'>Chăm sóc khách hàng: <span className='text-[13px] font-bold text-red-600'>minhhoang@mhm.vn</span></span>
              </div>
              <span className='text-[13px] font-bold ml-4'>Bộ phận kế toán: <span className='text-[13px] font-bold text-red-600'>ketoan@mhm.vn</span></span>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* chinh sach & tuyen dung & dk nhan tin */}
          <div className='md:flex md:gap-52 md:mx-0 md:mt-0 mt-6  mx-14 sm:grid sm:grid-cols-2 sm:gap-3 '>

            {/* chinh sach */}
            <div className='flex flex-col gap-1 mt-2'>
              <span className='text-base font-bold'>CHÍNH SÁCH</span>
              <div className='flex gap-2 mt-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Chính Sách Chung</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Chính Sách Chung</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Chính Sách Chung</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Chính Sách Chung</span>
              </div>
            </div>

            {/* tuyen dung */}
            <div className='flex flex-col gap-1 mt-2'>
              <span className='text-base font-bold'>TUYỂN DỤNG</span>
              <div className='flex gap-2 mt-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Tuyển dụng nhân viên bán hàng</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Tuyển dụng nhân viên kỹ thuật</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Tuyển dụng nhân viên thu ngân</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Tuyển dụng nhân viên kế toán nội bộ</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src="/icons/idk.svg" width={12} height={12} />
                <span className='text-sm font-bold'>Đào tạo nghề sửa chữa</span>
              </div>
            </div>

            {/* dk nhan tin */}
            <div className='flex flex-col gap-1 mt-2'>
              <span className='text-base font-bold'>ĐĂNG KÝ NHẬN TIN</span>
              <div className='mt-2 block w-[380px]'>
                <span className='text-sm font-bold'>Mỗi tháng chúng tôi đều có những đợt giảm giá dịch vụ và sản phẩm nhằm tri ân khách hàng. Để có thể cập nhật kịp thời những đợt giảm giá này, vui lòng nhập địa chỉ email của bạn vào ô dưới đây.</span>
              </div>
              <div className='w-[380px] h-[35px] relative z-10'>
                <input type="text" placeholder='Nhập địa chỉ email của bạn' className='w-[380px] h-[35px] rou pl-6' />
                <button>
                  <Image src="/icons/buttonsubscribe.svg" width={30} height={30} className=' absolute right-1 top-[2px]' />
                </button>
              </div>

              {/* social icon */}
              <div className='flex mt-2 gap-4'>
                <img src="/icons/fb.png" width={30} />
                <img src="/icons/taktak.png" width={30} />
                <img src="/icons/ins.png" width={30} />
                <img src="/icons/ytb.png" width={30} />
              </div>

              <img src="/img/dathongbao111.png" alt="" width={130} className='mt-2' />
            </div>

          </div>

        </div>

        {/* under */}
        <div className=' bg-footer-color w-full sm:h-[100px] h-[200px] flex justify-center z-10 absolute bottom-0'>
          <div className='w-[1200px] h-[100px] relative'>

            <div className='absolute sm:right-0 sm:top-4 right-[10%] top-[10%]'>
              <img src="/img/logo.png" className='sm:w-[200px] w-[300px]' />
            </div>

            <div className='flex justify-start sm:mt-6 mt-28'>
              <span className='text-white text-xs font-light'>Giấy phép đăng kí kinh doanh số 02B8030784 do UBND Quận Ngô Quyền cấp ngày 12/04/2017</span>
            </div>

            <div className='flex justify-center items-end sm:h-[60px] h-[50px]'>
              <span className='text-white text-xs'>Copyrights © 2022 by <span className='text-red-600'>Minh Hoàng Mobile</span></span>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
}

export default footer