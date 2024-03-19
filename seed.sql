-- Will change both example user's passwords once I get bycrypt running
INSERT INTO users (email, username, image_url, password, bio, header_image_url,location,first_name,last_name)
VALUES(     "ben@dosomething.org",
            "BenIsCool",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F44b6695e-9ae7-4039-bd65-cede627e03dc%2Fd6h7w29-afd01fbd-f058-4f47-ac23-cc3d0938aad4.png%2Fv1%2Ffill%2Fw_1032%2Ch_774%2Fluigi_s_hat_in_the_style_of_mlp_by_kuren247_d6h7w29-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzQ0YjY2OTVlLTlhZTctNDAzOS1iZDY1LWNlZGU2MjdlMDNkY1wvZDZoN3cyOS1hZmQwMWZiZC1mMDU4LTRmNDctYWMyMy1jYzNkMDkzOGFhZDQucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uXcwnzKeDG-MuX6ecfRBPWXEvh4TVjnNPtVGQb8LyaI&f=1&nofb=1&ipt=9c1c753fceafdebf0514eaa2b610b1365612b7b46fb9fb9cd05c026bb9a50705&ipo=images",
            "123456",
            "I'm ben and am doing things",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmario.wiki.gallery%2Fimages%2Fthumb%2F8%2F8b%2FLuigi_-_Luigi%27s_Mansion_3DS.png%2F1200px-Luigi_-_Luigi%27s_Mansion_3DS.png&f=1&nofb=1&ipt=a362456f82a66581f1baa09156c3efc01bd0d754f2b69bc8f375c68f43729e72&ipo=images",
            "Yo mama",
            "Ben",
            "Evil"),
            ( "ben@dosomething2.org",
            "RealBen",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F44b6695e-9ae7-4039-bd65-cede627e03dc%2Fd6h7w29-afd01fbd-f058-4f47-ac23-cc3d0938aad4.png%2Fv1%2Ffill%2Fw_1032%2Ch_774%2Fluigi_s_hat_in_the_style_of_mlp_by_kuren247_d6h7w29-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzQ0YjY2OTVlLTlhZTctNDAzOS1iZDY1LWNlZGU2MjdlMDNkY1wvZDZoN3cyOS1hZmQwMWZiZC1mMDU4LTRmNDctYWMyMy1jYzNkMDkzOGFhZDQucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uXcwnzKeDG-MuX6ecfRBPWXEvh4TVjnNPtVGQb8LyaI&f=1&nofb=1&ipt=9c1c753fceafdebf0514eaa2b610b1365612b7b46fb9fb9cd05c026bb9a50705&ipo=images",
            "1234567",
            "I'm the real ben the other is a fake and is ruining my life",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fluigi%2F21650-8-luigi-clipart.png&f=1&nofb=1&ipt=a2353f678084a62dd092084011d2f65a206cc7b950db9a4d164b4e74be17a993&ipo=images",
            "Yo mama"
            "Ben"
            "Just");

INSERT INTO messaages (text, user_id)
VALUES(
    "SOMEONE HELP ME FIX MY ISSUE!",
    0
);

INSERT INTO follows(user_being_followed_id,user_following_id)
VALUES(0,
        1);