## Ứng dụng gửi & đánh giá bài tập

### Yêu cầu

Một sinh viên sẽ có thể đăng nhập vào ứng dụng của chúng tôi và xem bảng điều khiển phác thảo các thông tin sau:

- Bài tập nào đến hạn, và khi nào
- (có lẽ) một trang để xem lại các bài tập đã nộp trước đây
- Trạng thái của một nhiệm vụ hiện đang được xem xét và nếu nó cần điều chỉnh
- Một cách để gửi (hoặc gửi lại) một bài tập để xem xét

Khi nộp bài, sinh viên sẽ được yêu cầu cung cấp các thông tin sau:

- URL GitHub tới Repo công khai
- Nhánh nào đúng

Sau khi gửi, trạng thái cập nhật từ "đang chờ gửi" -> "đã gửi"

Tính năng bổ sung: tận dụng API GitHub để xác minh xem URL có trỏ đến kho lưu trữ công khai hay không và nhận danh sách các nhánh để điền vào danh sách thả xuống "nhánh"

Khi một sinh viên đã nộp bài tập, một thông báo qua email sẽ được gửi tới tất cả các mã đang hoạt động
người đánh giá cho họ biết rằng đánh giá mã mới đã sẵn sàng. Người đánh giá mã đầu tiên yêu cầu bồi thường
đánh giá sẽ có thể bắt đầu làm việc với nó (và bây giờ nó không có sẵn cho những người khác để xem xét).

Khi người đánh giá mã đã yêu cầu một nhiệm vụ được gửi, trạng thái sẽ thay đổi từ
"đã gửi" -> "đang xem xét"

Tính năng tiền thưởng: nếu người đánh giá mã đã yêu cầu đánh giá và chưa hoàn thành đánh giá đó trong vòng 24 giờ, nó sẽ được gửi trở lại trạng thái trước đó và bất kỳ ai cũng có thể yêu cầu đánh giá đó.

Người đánh giá mã có thể từ chối đánh giá mã nếu nó không đáp ứng các tiêu chí của nhiệm vụ.
Khi người đánh giá mã từ chối một nhiệm vụ, trạng thái sẽ thay đổi từ "đã gửi" -> "cần cập nhật"
Khi điều này xảy ra, một thông báo sẽ được gửi đến học sinh cho biết họ cần phải làm gì
nhiều công việc hơn về nhiệm vụ đó. Sau khi hoàn thành công việc, họ có thể xem lại bài tập đó
để gửi lại (có thể nhắc họ đảm bảo rằng họ đã thực hiện các thay đổi của mình).
Khi một sinh viên gửi lại bài tập, họ sẽ có cơ hội thay đổi url github + nhánh, sau đó nó sẽ chuyển từ "cần cập nhật" -> "đang xem xét" và được chỉ định lại cho cùng một người đánh giá mã. Một thông báo sẽ được gửi đến người đánh giá mã.

Khi người đánh giá mã đã hoàn thành thành công đánh giá của họ, họ sẽ có thể gửi
đánh giá đã hoàn thành của họ (bằng cách thêm URL vào bản ghi video) và sau đó là thông báo
sẽ được gửi lại cho học sinh. Trạng thái sẽ thay đổi từ "đang xem xét" -> "đã hoàn thành"

Ngoài ra, đối với mỗi nhóm học sinh, chúng tôi sẽ cần có một API cho phép
Vai trò quản trị để tạo tài khoản người dùng

Công việc hàng loạt hàng ngày

Thông báo cho người đánh giá mã về các đánh giá đang bị trì hoãn và chờ xem xét
Thông báo cho sinh viên nếu bài tập bị từ chối của họ vẫn cần chỉnh sửa

ruột thừa

Các trạng thái: đang chờ gửi, đã gửi, đang xem xét, cần cập nhật, đã hoàn thành
