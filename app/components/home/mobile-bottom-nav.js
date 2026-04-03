import {
  CartIcon,
  CategoriesTabIcon,
  DealsTabIcon,
  HomeTabIcon,
  ProfileTabIcon,
} from "../icons/site-icons";

const mobileBottomNavItems = [
  { label: "Home", Icon: HomeTabIcon, active: true },
  { label: "Categories", Icon: CategoriesTabIcon },
  { label: "Deals", Icon: DealsTabIcon },
  { label: "Cart", Icon: CartIcon },
  { label: "Profile", Icon: ProfileTabIcon },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e7e9ee] bg-white/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-5 px-3 pt-2 text-center">
        {mobileBottomNavItems.map(({ label, Icon, active }) => (
          <a
            key={label}
            className={`flex min-h-[70px] flex-col items-center justify-center gap-1.5 ${
              active ? "text-[#6b7892]" : "text-[#9297a3]"
            }`}
            href="#"
          >
            <Icon className="h-[22px] w-[22px]" />
            <span className="text-[0.82rem] font-medium leading-none">
              {label}
            </span>
          </a>
        ))}
      </div>
      <div className="pb-[calc(env(safe-area-inset-bottom)+0.15rem)]" />
    </nav>
  );
}
