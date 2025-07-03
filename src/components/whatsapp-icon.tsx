export function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/911234567890" // IMPORTANT: Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.902-.539-5.571-1.528l-6.273 1.658zm6.767-6.167c.631.357 1.325.545 2.031.545h.004c4.652 0 8.422-3.772 8.422-8.424s-3.77-8.424-8.422-8.424c-4.652 0-8.422 3.771-8.422 8.424 0 1.564.423 3.065 1.196 4.396l-.682 2.487 2.51-.654z" />
      </svg>
    </a>
  );
}
