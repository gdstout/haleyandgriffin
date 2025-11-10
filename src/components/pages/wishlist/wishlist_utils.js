const exampleList = {
  record: {
    name: "Example Wishlist",
    password: "password",
    updatedAt: "2023-01-01T00:00:00.000Z",
    sections: [
      {
        title: "Section 1",
        items: [
          {
            name: "Basketball hoop",
            checked: false,
          },
          {
            name: "new kiwi",
            checked: false,
          },
        ],
      },
      {
        title: "Section 2",
        items: [
          {
            name: "a much longer item that would require potentially more than 1 line of text to fully display",
            checked: false,
          },
        ],
      },
    ],
  },
  metadata: {
    id: "123456789abcdef",
    name: "Example Wishlist",
    private: true,
    createdAt: "2023-01-01T00:00:00.000Z",
  },
};

const exampleBlankList = {
  record: {
    name: "Example Wishlist",
    password: "password",
    updatedAt: "2023-01-01T00:00:00.000Z",
    sections: [
      
    ],
  },
  metadata: {
    id: "123456789abcdef",
    name: "Example Blank Wishlist",
    private: true,
    createdAt: "2023-01-01T00:00:00.000Z",
  },
};

export const getWishlist = async (id) => {
  try {
    const apiKey = process.env.REACT_APP_JSONBIN_API_ACCESS_KEY;
    if (!apiKey) {
      throw new Error("Missing API key");
    }

    const response = await fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": apiKey,
      },
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Error fetching wishlist: ${text}`);
    }

    const data = await response.json();
    console.log("Fetched wishlist data:", data);
    return data;
  } catch (e) {
    console.error("Error fetching wishlist:", e);
    throw e;
  }
};

export const updateWishlist = async (wishlist, id) => {
  try {
    const apiKey = process.env.REACT_APP_JSONBIN_API_ACCESS_KEY;
    if (!apiKey) {
      throw new Error("Missing API key");
    }

    const response = await fetch(`https://api.jsonbin.io/v3/b/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": apiKey,
        "X-Bin-Private": "true",
        "X-Bin-Name": wishlist.metadata.name,
      },
      body: JSON.stringify(wishlist.record),
    });
    
    if (!response.ok) {
      const text = await response.text();
      console.log(text)
      throw new Error(`Error updating wishlist: ${text}`);
    } 
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error updating wishlist:", e);
    throw e;
  }
};

export const deleteWishlist = async (id) => {
  try {
    const apiKey = process.env.REACT_APP_JSONBIN_API_ACCESS_KEY;
    if (!apiKey) {
      throw new Error("Missing API key");
    }

    const response = await fetch(`https://api.jsonbin.io/v3/b/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": apiKey,
      },
    });

    if(!response.ok){
      const text = await response.text();
      throw new Error(`Error deleting wishlist: ${text}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error("Error deleting wishlist:", e);
    throw e;
  }
}
