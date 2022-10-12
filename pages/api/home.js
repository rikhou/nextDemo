const data = {
  title: "Home",
  homeData: {
    heroImage: {
      bgImage: "assets/images/brand/ra/hero.jpg",
      headTitle: "Plan your trip to an Oregon State Park",
      subHeadTitle: "Not sure where to go?",
      ctaText: "Explore all Parks",
      ctaLink: "#",
    },
    adventure: {
      title: "Find your next adventure",
      adventureList: [
        {
          id: 1,
          link: "#",
          title: "Camping & Lodging_1",
          description: "Comfortable places, with friends or family",
          image: "/assets/images/home/adventure_1.png",
        },
        {
          id: 2,
          link: "#",
          title: "Group Picnic and Day-Use_2",
          description: "Treat Yourself To A Luxury Picnic!",
          image: "/assets/images/home/adventure_2.png",
        },
        {
          id: 3,
          link: "#",
          title: "Day-use Parking Permits_3",
          description: "You can get a permit in our Park Store",
          image: "/assets/images/home/adventure_3.png",
        },
        {
          id: 4,
          link: "#",
          title: "Day-use Parking Permits_4",
          description: "You can get a permit in our Park Store",
          image: "/assets/images/home/adventure_3.png",
        },
        {
          id: 5,
          link: "#",
          title: "Day-use Parking Permits_5",
          description: "You can get a permit in our Park Store",
          image: "/assets/images/home/adventure_1.png",
        },
        {
          id: 6,
          link: "#",
          title: "Day-use Parking Permits_6",
          description: "You can get a permit in our Park Store",
          image: "/assets/images/home/adventure_2.png",
        },
      ],
    },
    TopSpot: [
      {
        id: 1,
        link: "#",
        description: "Available tonight",
        image: "/assets/images/home/topSpot_1.jpg",
      },
      {
        id: 2,
        link: "#",
        description: "Available this weekend",
        image: "/assets/images/home/topSpot_2.jpg",
      },
      {
        id: 3,
        link: "#",
        description: "Available next weekend",
        image: "/assets/images/home/topSpot_3.jpg",
      },
      {
        id: 4,
        link: "#",
        description: "Camping near me",
        image: "/assets/images/home/topSpot_4.jpg",
      },
      {
        id: 5,
        link: "#",
        description: "RV sites near me",
        image: "/assets/images/home/topSpot_5.jpg",
      },
      {
        id: 6,
        link: "#",
        description: "Tent sites near me",
        image: "/assets/images/home/topSpot_6.jpg",
      },
      {
        id: 7,
        link: "#",
        description: "Trailer sites near me",
        image: "/assets/images/home/topSpot_7.jpg",
      },
      {
        id: 8,
        link: "#",
        description: "Group sites near me",
        image: "/assets/images/home/topSpot_8.jpg",
      },
    ],
    EventsCalendar: [
      {
        id: 1,
        date: {
          day: "23",
          month: "Apr",
        },
        type: "Earth Day Weekend",
        title: "Planting Event at Jasper State Recreation Site",
        description: "Jasper State Recreation Site",
      },
      {
        id: 2,
        date: {
          day: "20",
          month: "Apr",
        },
        type: "Earth Day",
        title: "Remove Invasive Plants at Jessie M. Honeyman State Park",
        description: "Jessie M. Honeyman Memorial State Park",
      },
    ],
    basicRecommendations_mock: {
      title: "Featured places",
      recommendationGroup: [
        {
          name: "Camping & Lodging",
          recommendations: [
            {
              parkId: 252711,
              parkName: "Burlingame State Park",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/adventure_1.png",
            },
            {
              parkId: 252741,
              parkName: "Charlestown Breachway",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/adventure_2.png",
            },
            {
              parkId: 252761,
              parkName: "East Beach",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/adventure_3.png",
            },
            {
              parkId: 252611,
              parkName: "Fishermens Memorial State Park",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/adventure_1.png",
            },
            {
              parkId: 253123,
              parkName: "George Washington Campground",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/adventure_2.png",
            },
            {
              parkId: 253124,
              parkName: "Pulaski Park",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/adventure_3.png",
            },
          ],
        },
        {
          name: "Day use & Picnic areas",
          recommendations: [
            {
              parkId: 253124,
              parkName: "Pulaski Park",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/feature_image_1.jpg",
            },
            {
              parkId: 253123,
              parkName: "George Washington Campground",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/feature_image_2.jpg",
            },
            {
              parkId: 252611,
              parkName: "Fishermens Memorial State Park",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/feature_image_3.jpg",
            },
            {
              parkId: 252761,
              parkName: "East Beach",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/feature_image_4.jpg",
            },
            {
              parkId: 252741,
              parkName: "Charlestown Breachway",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/feature_image_5.jpg",
            },
            {
              parkId: 252711,
              parkName: "Burlingame State Park",
              contractCode: "RI",
              imgUrl:
                "https://ri-uwppl.ue1qa2.nonprod.aspiraint.com/images/adventure_1.png",
            },
          ],
        },
        {
          name: "Camping & Lodging test label 1",
          recommendations: [
            {
              parkId: 253124,
              parkName: "Pulaski Park",
              contractCode: "RI",
              imgUrl: "/images/feature_image_10.jpg",
            },
            {
              parkId: 253123,
              parkName: "George Washington Campground",
              contractCode: "RI",
              imgUrl: "/images/feature_image_2.jpg",
            },
          ],
        },
        {
          name: "Camping & Lodging test label 2",
        },
        {
          name: "Camping & Lodging & test label 3",
        },
      ],
    },
    Article: [
      {
        id: 1,
        title: "Build a safe campfire this summer",
        date: "May 26, 2022",
      },
      {
        id: 2,
        title: "Electric vehicle charging stations coming to some state parks",
        date: "May 19, 2022",
      },
      {
        id: 3,
        title: "Celebrating 100 years",
        date: "Apr 5, 2022",
      },
    ],
    Connection: [
      {
        id: 1,
        description: "oregon A",
        image: "/assets/images/home/home-connect-1.png",
      },
      {
        id: 2,
        description: "oregon B",
        image: "/assets/images/home/home-connect-2.png",
      },
      {
        id: 3,
        description: "oregon C",
        image: "/assets/images/home/home-connect-3.png",
      },
      {
        id: 4,
        description: "oregon D",
        image: "/assets/images/home/home-connect-4.png",
      },
      {
        id: 5,
        description: "oregon E",
        image: "/assets/images/home/topSpot_3.jpg",
      },
      {
        id: 6,
        description: "oregon F",
        image: "/assets/images/home/topSpot_4.jpg",
      },
    ],
  },
};

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}
