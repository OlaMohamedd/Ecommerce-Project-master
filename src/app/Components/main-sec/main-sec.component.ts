import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-main-sec',
  templateUrl: './main-sec.component.html',
  styleUrls: ['./main-sec.component.scss']
})
export class MainSecComponent {
  Discount: DiscountOffers =  DiscountOffers.NoDiscount;
  ClientName: string = "Samir";
  store: Store = new Store("Zara",["maadi","nasr","haram"],
  "data:image/png;base64,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");
  // product: IProduct = {
  //   ID: 1,
  //   Name: "T-shirt",
  //   Quantity: 100,
  //   Price: 250,
  //   Img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgHBwgGBQkFBgoGBwcGBw8ICQcKIB0iIiARHx8kHSgiGCYlGxMfITEhJSkrLi4uFx8zODM4NygtLisBCgoKDQ0OFg0NFSsZHxkrLSsrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMsAhwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgUBAwQGB//EADQQAAICAQEEBgkDBQAAAAAAAAABAgMRBAUSITEGEyIyQXMjQlFSYmOhscFhcZFTcoGCov/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APsoANIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGzXZbGuLnNquNa3m5FNrNryk3DTp1x/qS70v2RNVbX6umhZtmo/p3pFbT0i0852QnRqa3VY63uyjMqpScm3NuTlzZoshHeUpxhKfg5RXaRNXHpJba0iWcan9uoK/R9K9PqtpWbOjpr6oUaR6meqsmpeKwsFTOxqvq40q143Vu1Le/kloKHTGcpKHWXtSn1fdivBDR7OE4zSnBqxe2JI8zVdZW9+uc638Jb6LaKsca70q5ye6px7smWVHeACoAAAAAAAAEJySRNs4tZaoxbb4RTkwKnburlLq6IPs9fXKz4vYis0FvX6TT3+NtX5NtsnYt987L1Z9Ti2M8aGiPuu6P/AFIxWncjLw1iSUiJlMgKuK5I2IhkymBNMzOzdS8yJDJCzLcPNiB6rR3dbWpN9qt7szcVOzbnG1wb7Nq+pbG5UAAVAAAAABCbwil2vY93cXO17v8AgubOTKHadNkpqyPajFbuI96JKqvylFI4dlcNJQv0lL6s7FzSfKT3cnFoMqiqL9VOP1ZhXdkymQyZTCpmAAjKfExJ8Y/3oITjya98CwosxKLz4l/TNWQU/wCTzNKw1nJf6CuyEXvrdUuSl3jXKOoAGkAAAAAEZrKOLUVZTO9mq1ZTA8xrK3CbcfWOCtJL9csu9oVrJSrg2vjZiqnkJkMhMjTamZTIJ8DKaCJ5wdelolfJQg4RUXvTcvYcUnhZLbYWJTsfyl9yiz0ukrpw4x3pe/LtSOxEYokbZAAAAAAAACEyZCYFRtBcTzzfpLPNl9z0O0OZ5uT9Lb5sjPSptmM8TDIN8UZabs8DCfEY4GtPtAdEnmLLbo08ys8r8lO3hFt0XebL18r8ljL0aAQNoAAAAAAAAELORM12vgwKjaD4nmpv013ns9FtF8TzM2uuu89melbZPgas5kicuEEzRCWZIy07c5iaE+2jY3iJzxlmxAdknwLTou/T3L5H5RUyfAtOjLS1NiXrUP7oqPUIGEZNsgAAAAAAABqt5M2kJrKAotop5PNTi422SnGcVKxyTPZ6nTqfgcc9nxkuKM2NPMztr3Ut9RZzRnFSympf7Ho7Nkwb7qIx2PBeqiYKid0dxJM0VNdZF4mXs9lLwRmvZfHkMFaoux7tcLLHL3Ylx0d0upp1LndRbRDqJRzZE7dFoI1tPBawWEakRNGQgVAAAAAAAAANAAQlBMi60bRgDQ6l7DHUr2HRgYA5nSvYI0peB04GANcYJGxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
  //   CategoryID: 1
  // };
  // Category: ICategory = {
  //   ID: 332120,
  //   Name: "Clothes"
  // };
}
