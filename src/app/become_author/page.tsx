import PostSuggested from "@/components/PopularPosts";

export default function BecomeAuthor() {
  // Sample posts (could be fetched from a DB or API)
  const posts = [
    {
      id: "1",
      title: "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
      postedBy: "John Doe",
      postTime: "2 hours ago",
      content: "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
      tags: ["τέχνη", "προβολές"],
      photos: [
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
      ],
      state: true,
    },
    {
      id: "2",
      title: "Post Title 2",
      postedBy: "Alice Smith",
      postTime: "1 day ago",
      content: "Another example of a post's content.",
      tags: ["νέα", "κριτικές"],
      photos: [
        "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
      ],
      state: false,
    },
	{
		id: "3",
		title: "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
		postedBy: "John Doe",
		postTime: "2 hours ago",
		content: "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
		tags: ["τέχνη", "προβολές"],
		photos: [
		  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
		],
		state: true,
	  },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Section */}
      <section className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto px-3 pt-24 flex-grow">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          Γίνε Συντάκτης
        </h2>

        <div className="flex flex-col items-center">
          <a
            href="https://docs.google.com/forms/d/1UADE-4UFuZR6A-eseI3iQ70InVnTfEWaM1GUO4qVtqo/edit"
            target="_blank"
            className="text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center"
          >
            📌 Βρείτε τη φόρμα εκδήλωσης ενδιαφέροντος εδώ
          </a>
        </div>
      </section>

      {/* PostSuggested at the Bottom */}
      <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto mb-10">
        <PostSuggested posts={posts} />
      </div>
    </div>
  );
}
